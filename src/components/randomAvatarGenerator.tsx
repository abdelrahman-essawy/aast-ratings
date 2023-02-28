"use client"
import { BigHead } from '@bigheads/core'

export function randomAvatarGenerator(ref) {
    return <BigHead
        ref={ref}
        skinTone='light'
    />
}
