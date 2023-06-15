import React, { useState } from 'react';
import styled from 'styled-components';

const SettingContainer = styled.div`
  width: 80%;
  padding: 0.5rem;
`;

const SettingHeader = styled.h2`
  font-size: 1rem;
  text-transform: uppercase;
  color: ${pr => pr.theme.colors.primary};
`;

const SettingValues = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 0.9rem;
`;

const EditButton = styled(Button)`
  background-color: #4caf50;
  color: #fff;
`;

const SaveButton = styled(Button)`
  background-color: #4caf50;
  color: #fff;
`;

const CancelButton = styled(Button)`
  background-color: #ff5722;
  color: #fff;
`;

const SliderContainer = styled.div`
  margin: 0.5rem 0;
`;

const SliderLabel = styled.span`
  font-size: 0.9rem;
  color: #fff;
`;

const SliderValue = styled.span`
  font-weight: bold;
  color: #4caf50;
  font-family: ${pr => pr.theme.font.family.secondary};
  padding-left: 0.5rem;
  
`;

const PunishmentSelect = styled.select`
  padding: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  background-color: #fff;
  width: 100%;
  font-size: 0.9rem;
`;

const Slider = styled.input`
  width: 100%;
  height: 8px;
  background-color: #cccccc;
  border-radius: 10px;
  -webkit-appearance: none;
  &::-webkit-slider-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #4caf50;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #4caf50;
    cursor: pointer;
  }
`;



const SettingItem = ({ name, thresh, punishments, onChange, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);

  const convertToPercent = (value) => {
    return `${value * 100}%`;
    };

  const handleEdit = () => {
    setIsEditing(true);
  };

    const handleSave = (e) => {
      setIsEditing(false);
      onSave(e);
    };
  
    const handleCancel = () => {
      setIsEditing(false);
    };
  
    return (
      <SettingContainer>
        <SettingHeader>{name}</SettingHeader>
        {isEditing ? (
          <>
            <SliderContainer>
              <SliderLabel>Threshold:</SliderLabel>
              <SliderValue>{convertToPercent(thresh)}</SliderValue>
              <Slider
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={thresh}
                onChange={(e) => onChange(e, 'thresholds')}
                name={name}
              />
            </SliderContainer>
            <SliderContainer>
              <SliderLabel>Punishment:</SliderLabel>
              <PunishmentSelect
                name={name}
                onChange={(e) => onChange(e, `punishments[${name}].action`)}
                value={punishments.action}
              >
                <option value="timeout">Timeout</option>
                <option value="ban">Ban</option>
              </PunishmentSelect>
            </SliderContainer>
            <div>
              <SaveButton onClick={handleSave}>Save</SaveButton>
              <CancelButton onClick={handleCancel}>Cancel</CancelButton>
            </div>
          </>
        ) : (
          <SettingValues>
            <div>
              <SliderLabel>Sensitivity:</SliderLabel>
              <SliderValue>{convertToPercent(thresh)}</SliderValue>
            </div>
            <div>
              <SliderLabel>Punishment:</SliderLabel>
              <SliderValue>{punishments.action}</SliderValue>
            </div>
            <EditButton onClick={handleEdit}>Edit</EditButton>
          </SettingValues>
        )}
      </SettingContainer>
    );
  };
  
  export default SettingItem;
  
 
