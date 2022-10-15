import {writable} from 'svelte/store';
import type {UserData} from './types';
import { persist, createLocalStorage } from "@macfja/svelte-persistent-store"


export const defaultUserData: UserData = {
    bio: {
        name: 'Hoshimachi Suisei',
        class: 'Bard',
        level: 1,
        race: 'Human',
        background: 'Entertainer',
        alignment: 'Chaotic Good',
        xp: 0,
        playerName: 'dw87',
        appearance: {
            age: 18,
            height: '5\' 4"',
            weight: '110 lbs',
            eyes: 'Blue',
            skin: 'Pale',
            hair: 'Blue'
        },
    },
    abilityScores: {
        strength: {
            score: 10,
            modifier: 0
        },
        dexterity: {
            score: 10,
            modifier: 0
        },
        constitution: {
            score: 10,
            modifier: 0
        },
        intelligence: {
            score: 10,
            modifier: 0
        },
        wisdom: {
            score: 10,
            modifier: 0
        },
        charisma: {
            score: 10,
            modifier: 0
        }
    }
}

export const defaultDisplay = {
    showPhysicalCharacteristics: false
}

export const userStore = persist(writable(defaultUserData), createLocalStorage(), "userStore");
export const display = persist(writable(defaultDisplay), createLocalStorage(), "display");