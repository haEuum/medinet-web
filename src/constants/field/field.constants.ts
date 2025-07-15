import { INTERNAL_MEDICINE, SURGERY, FIRE_ADMINISTRATION_COMMAND, FIRE_RESCUE, GENERAL_RESCUE, EMERGENCY_TRANSPORT,} from "./field.enum";

export const fieldOptions = [
    {
        label: "의료 (내과)",
        value: "INTERNAL_MEDICINE",
        userClass: Object.keys(INTERNAL_MEDICINE),
    },
    {
        label: "의료 (외과)",
        value: "SURGERY",
        userClass: Object.keys(SURGERY),
    },
    {
        label: "소방 행정, 지휘",
        value: "FIRE_ADMINISTRATION_COMMAND",
        userClass: Object.keys(FIRE_ADMINISTRATION_COMMAND),
    },
    {
        label: "소방 구조",
        value: "FIRE_RESCUE",
        userClass: Object.keys(FIRE_RESCUE),
    },
    {
        label: "일반 구조",
        value: "GENERAL_RESCUE",
        userClass: Object.keys(GENERAL_RESCUE),
    },
    {
        label: "응급 구조, 이송",
        value: "EMERGENCY_TRANSPORT",
        userClass: Object.keys(EMERGENCY_TRANSPORT),
    },
];

export const fieldToEnumMap = {
    INTERNAL_MEDICINE,
    SURGERY,
    FIRE_ADMINISTRATION_COMMAND,
    FIRE_RESCUE,
    GENERAL_RESCUE,
    EMERGENCY_TRANSPORT,
} as const;