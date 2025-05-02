import { useState } from "react";
import "./style.scss";

const fieldOptions = [
  {
    label: "의료 (내과)",
    value: "INTERNAL_MEDICINE",
    userClasses: [
      "응급의학과",
      "중환자의학과",
      "심장내과",
      "신장내과",
      "호흡기내과",
      "신경과",
      "감염내과",
      "소아청소년과",
      "노인병내과",
      "알레르기내과",
      "응급 간호",
      "중환자실 간호",
      "응급실 간호",
    ],
  },
  {
    label: "의료 (외과)",
    value: "SURGERY",
    userClasses: [
      "외상외과",
      "신경외과",
      "정형외과",
      "흉부외과",
      "혈관외과",
      "성형외과",
      "일반외과",
      "이비인후과",
      "안과",
      "화상외과",
      "구강악안면외과",
      "비뇨의학과",
      "외상전문의 간호",
    ],
  },
  {
    label: "소방 행정, 지휘",
    value: "FIRE_ADMINISTRATION_COMMAND",
    userClasses: [
      "소방 지휘관",
      "소방관",
      "소방 헬기 조종사",
      "119 상황실",
      "응급이송 코디네이터",
    ],
  },
  {
    label: "소방 구조",
    value: "FIRE_RESCUE",
    userClasses: [
      "소방 구조대",
      "수난 구조대",
      "고속도로 구조대",
      "화재 구조대",
      "특수 구조대",
    ],
  },
  {
    label: "일반 구조",
    value: "GENERAL_RESCUE",
    userClasses: [
      "경찰 특공대 구조",
      "재난 대응 특수부대",
      "산악 구조대",
      "해양경찰 구조대",
      "군 구조대",
    ],
  },
  {
    label: "응급 구조, 이송",
    value: "EMERGENCY_TRANSPORT",
    userClasses: [
      "119 구급대",
      "응급구조 1급",
      "응급구조 2급",
      "병원 응급구조",
    ],
  },
];


const Step3 = () => {
  const [selectedField, setSelectedField] = useState("");

  const handleFieldChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedField(e.target.value);
  };

  const currentField = fieldOptions.find((f) => f.value === selectedField);

  return (
    <div className="signup-step3">
      <div className="signup-step3-input-group">
        <div className="form-group">
          <label className="form-label" htmlFor="field">
            직군
          </label>
          <select
            id="field"
            name="field"
            className="signup-select"
            value={selectedField}
            onChange={handleFieldChange}
          >
            <option value="">직군을 선택해주세요</option>
            {fieldOptions.map((field) => (
              <option key={field.value} value={field.value}>
                {field.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="userClass">
            소속
          </label>
          <select
            id="userClass"
            name="userClass"
            className="signup-select"
            disabled={!selectedField}
          >
            {!selectedField ? (
              <option value="">먼저 직군을 선택해주세요</option>
            ) : (
              currentField?.userClasses.map((uc) => (
                <option key={uc} value={uc}>
                  {uc}
                </option>
              ))
            )}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Step3;
