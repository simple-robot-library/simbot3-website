import React from 'react';


function dataValue(value) {
        return { 'data-value': value + '' }
}

export default function DataValues() {
    return {
        kts: dataValue('Kts'),
        kotlin: dataValue('Kotlin'),
        java: dataValue('Java'),
        gradle: dataValue('Gradle'),
        maven: dataValue('maven'),
    }
}
