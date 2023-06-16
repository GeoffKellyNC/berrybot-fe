import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import * as twitchActions from '../../../store/twitch/twitch.actions'

import SettingItem from './SettingItem'

const AiSettings = ({
    userData,
    updateUserAiConfig
}) => {
    const [config, setConfig] = useState(userData.aiConfig)
    const [changes, setChanges] = useState(false);

    const onChange = (e, path) => {
        // setChanges(true);
        const { name, value } = e.target;
        if (path === "thresholds") {
          const valueNum = parseFloat(value);
          setConfig((prev) => ({
            ...prev,
            thresholds: {
              ...prev.thresholds,
              [name]: valueNum,
            },
          }));
        } else if (path.startsWith("punishments")) {
          const key = path.substring(path.indexOf("[") + 1, path.indexOf("]"));
          const field = path.substring(path.indexOf(".") + 1);
          setConfig((prev) => ({
            ...prev,
            punishments: {
              ...prev.punishments,
              [key]: {
                ...prev.punishments[key],
                [field]: value,
              },
            },
          }));
        }
      }

      const onSave = async (e) => {
        console.log('saving...')
        e.preventDefault();
        setChanges(false);
        await updateUserAiConfig(config);
      };
    
      const onCancel = (e) => {
        e.preventDefault();
        setConfig(userData.aiConfig);
        setChanges(false);
      };

  return (
    <AiSettingWrapper>
    <div className="ai-settings-title">
        <span> Ai Moderation </span>
      </div>
      {
        changes ? (
          <>
            <div className="ai-settings-save">
              <button onClick={onSave}>Save</button>
            </div>
            <div className="ai-settings-cancel">
              <button onClick = {onCancel}>Cancel</button>
            </div>
          </>
        ) : null
      }
{
  Object.entries(config.thresholds).map(([key, value], idx) => {
    return (
      <SettingItem
        key={idx}
        name={key}
        thresh={config.thresholds[key]}
        punishments={config.punishments[key]}
        onChange={onChange}
        onSave = {onSave}
      />
    );
  })
}
    </AiSettingWrapper>
  )
}

export default connect(st => ({
    userData: st.userData
}),{
    updateUserAiConfig: twitchActions.updateUserAiConfig
}) (AiSettings)


const AiSettingWrapper = styled.div`
    font-family: ${(pr) => pr.theme.font.family.primary};
    color: ${(pr) => pr.theme.font.colors.primary};
    width: 420px;
    height: 300px;
    background-color: ${pr => pr.theme.colors.dashboard_background};
    box-shadow: 0 8px 12px 0 rgba(3, 1, 1, 0.37);
    background-color: ${(pr) => pr.theme.colors.color_clear};
    backdrop-filter: blur(4px);
    border-radius: 8px;
    border: 1px solid ${(pr) => pr.theme.colors.primary};
    overflow-y: scroll;



    .ai-settings-title {
        font-family: ${(pr) => pr.theme.font.family.secondary};
        font-size: ${(pr) => pr.theme.font.size.xxl};
        border-bottom: 2px solid ${(pr) => pr.theme.colors.accent};
        padding: 10px;
        display: flex;
        justify-content: center;
    }

`