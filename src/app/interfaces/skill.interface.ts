export interface ISkill {
    id: string;
    name: string;
    level: number;
    levelDescription: string;
    description: string;
    attack?: number;
    defense?: number;
    spellPower?: number;
    knowledge?: number;
    troops?: number;
    gold?: number;
    chances: {
        base: number;
        factionBuff?: { id: string; buff: number; }[];
        factionDebuff?: { id: string; debuff: number; }[];
        classBuff?: { id: string; buff: number; }[];
        classDebuff?: { id: string; debuff: number; }[];
    };
}
