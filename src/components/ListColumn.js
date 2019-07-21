import React from 'react'
import { StyleSheet, Text, View, ScrollView, SectionList } from 'react-native';
import Icon from './Icon'
import Song from './Song'

export default function ListColumn(props) {
    if (props.title === "preach") {
        return (
            <View style={styles.column}>
                <Text style={styles.columnTitle}>Preach</Text>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}><Icon color='white' icon="arrow" direction="left" /><Text style={{ color: 'white', fontSize: 20 }}> before the preach</Text></View>
                    <View style={{ justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', textAlign: 'right' }}><Text style={{ color: 'white', fontSize: 20 }}>after the preach </Text><Icon color='white' icon="arrow" direction="right" /></View>
                </View>

            </View>
        )
    }
    return (
        <View style={styles.column}>
            {props.title && <Text style={styles.columnTitle}>{props.title}</Text>}

            <SectionList
                keyExtractor={item => item.id}
                renderSectionHeader={({ section }) => {
                    if (!section.title) { return null }
                    return (
                        <View style={styles.listMiddle}><Text style={styles.listTitle}>{section.title}</Text></View>
                    )
                }}
                renderItem={({ item }) => <View key={item.id} style={styles.listMiddle}><Song song={item} /></View>}
                sections={props.lists}
                ListFooterComponent={<View style={styles.listBottom}></View>}
                ListHeaderComponent={<View style={styles.listTop}></View>}
                renderSectionFooter={() => <View style={[styles.listMiddle, { paddingBottom: 20 }]} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    column: {
        flex: 1,
        backgroundColor: '#030304',
        paddingTop: 20,
        paddingBottom: 60,
        paddingHorizontal: 10,
        maxWidth: 320,
        minWidth: 280
    },
    columnTitle: {
        fontSize: 30,
        color: 'white'
    },
    listTop: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 40,
        paddingHorizontal: 0,
        marginBottom: -20,
        borderColor: '#2886AE',
        borderLeftWidth: 6,
        borderRightWidth: 6,
        borderTopWidth: 6,
        borderStyle: 'solid'
    },
    listMiddle: {
        backgroundColor: 'white',
        paddingHorizontal: 0,
        borderColor: '#2886AE',
        borderLeftWidth: 6,
        borderRightWidth: 6,
        borderStyle: 'solid'
    },
    listBottom: {
        backgroundColor: 'white',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 0,
        height: 40,
        borderColor: '#2886AE',
        borderLeftWidth: 6,
        borderRightWidth: 6,
        borderBottomWidth: 6,
        borderStyle: 'solid',
        marginTop: -20
    },
    listTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 6,
        paddingHorizontal: 8
    }
});
