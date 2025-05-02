import { useState } from "react";
import { fieldOptions } from "@/types/field/fieldoptions";
import "./style.scss";

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
