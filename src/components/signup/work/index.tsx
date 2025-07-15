import { useMemo } from "react";
import Select from "@/components/ui/select";
import useSignup from "@/hooks/auth/useSignup";
import { fieldOptions, fieldToEnumMap } from "@/constants/field/field.constants";
import { SelectProps } from "@/types/ui/select/select.type";

const Work = ({ onKeyDown }: SelectProps) => {
    const { signupData, onChange } = useSignup();

    const userClassOptions = useMemo(() => {
        if (!signupData.field) return [];

        const enumObj = fieldToEnumMap[signupData.field as keyof typeof fieldToEnumMap];
        return Object.entries(enumObj).map(([key, value]) => ({
            label: value,
            value: key,
        }));
    }, [signupData.field]);

    return (
        <>
            <Select
                label="직군"
                name="field"
                value={signupData.field}
                onChange={onChange}
                options={[
                    { label: "직군을 선택해주세요", value: "" },
                    ...fieldOptions.map(({ label, value }) => ({ label, value })),
                ]}
                onKeyDown={onKeyDown}
            />

            <Select
                label="소속"
                name="userClass"
                value={signupData.userClass}
                onChange={onChange}
                disabled={!signupData.field}
                options={
                    !signupData.field
                        ? [{ label: "먼저 직군을 선택해주세요", value: "" }]
                        : [
                            { label: "소속을 선택해주세요", value: "" },
                            ...userClassOptions,
                        ]
                }
                onKeyDown={onKeyDown}
            />
        </>
    );
};

export default Work;