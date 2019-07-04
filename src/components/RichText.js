import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default RichText = ({ text }) => {
    if (!text) { return null }
    if (!text.content) { return null }
    return text.content.map((p, key) => {
        if(!p){return null}
        if (!p.content) { return null }
        if (p.nodeType === "paragraph") {
            return <Text style={styles.paragraph} key={key}><ProcessText text={p.content}/></Text>
        }
        if (p.nodeType === "unordered-list") {
            return <Text key={key}><ProcessText text={p.content}/></Text>
        }
        return <Text key={key}><ProcessText text={p.content}/></Text>
    })
}


const ProcessText = ({text}) => {
    if(!text){return null}
    return text.map((c, key) => {
        if (c.nodeType === "text") {
            let markup = []
            if (c.marks) { markup = c.marks.map(mark => mark.type) }
            const styles = {
                fontWeight: markup.includes('bold') ? 'bold':'normal',
                fontStyle: markup.includes('italic') ? 'italic':'normal'
            }
            return <Text key={key} style={styles}>{c.value}</Text>
        }
        if (c.nodeType === "hyperlink") {
            return c.content.map(h => {
                return <Text key={key} href={c.data.uri}>{h.value}</Text>
            })
        }
        if (c.nodeType === "list-item") {
            return c.content.map(l => {
                return <Text key={key}>{l.content && l.content.map(li => li.value)}</Text>
            })
        }
        return null
    })
}

const styles = StyleSheet.create({
    paragraph: {
        marginBottom: 8
    },
});
