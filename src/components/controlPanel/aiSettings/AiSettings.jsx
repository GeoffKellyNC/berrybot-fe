import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import * as twitchActions from '../../../store/twitch/twitch.actions'

import SettingItem from './SettingItem'

import { TbHelpTriangleFilled } from 'react-icons/tb'
import { Modal } from 'antd'


const AiSettings = ({
    userData,
    updateUserAiConfig,
    aiSettingsRef
}) => {
    const [config, setConfig] = useState(userData.aiConfig)
    const [changes, setChanges] = useState(false);
    const [openHelp, setOpenHelp] = useState(false)

    const handleHelp = () => {
        setOpenHelp(!openHelp)
    }

    const handleInfoHover = (type) => {
      switch(type.toLowerCase()){
        case 'sexual':
          return 'Content meant to arouse sexual excitement, such as the description of sexual activity, or that promotes sexual services (excluding sex education and wellness).'
        case 'hate':
          return 'Content that expresses, incites, or promotes hate based on race, gender, ethnicity, religion, nationality, sexual orientation, disability status, or caste. Hateful content aimed at non-protected groups (e.g., chess players) is not covered by this category.'
        case 'violence':
          return 'Content that promotes or glorifies violence or celebrates the suffering or humiliation of others.'
        case 'self-harm':
          return 'Content that promotes, encourages, or depicts acts of self-harm, such as suicide, cutting, and eating disorders.'
        case 'sexual/minors':
          return 'Sexual content that includes an individual who is under 18 years old.'
        case 'hate/threatening':
          return 'Hateful content that also includes violence or serious harm towards the targeted group.'
        case 'violence/graphic':
          return 'Violent content that depicts death, violence, or serious physical injury in extreme graphic detail.'
        default:
          return 'Error'
      }
    }

    const handleInfoColor = (type) => {
      switch(type.toLowerCase()){
        case 'sexual':
          return 'pink'
        case 'hate':
          return 'red'
        case 'violence':
          return 'gold'
        case 'self-harm':
          return 'cyan'
        case 'sexual/minors':
          return 'volcano'
        case 'hate/threatening':
          return 'blue'
        case 'violence/graphic':
          return 'purple'
        default:
          return 'Error'
      }
    }

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
    <AiSettingWrapper ref = {aiSettingsRef}>
    <div className="ai-settings-title">
        <span> 
          AI Moderation Settings
          <TbHelpTriangleFilled 
            style = {{
              color: 'orange',
              fontSize: '20px',
              marginLeft: '10px',
            }}
            onClick = {handleHelp}
          />
        </span>
        
        <span className = 'subtitle'>Lower sensitivty = Stricter Moderation</span>
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
        handleInfoHover = {handleInfoHover}
        handleInfoColor = {handleInfoColor}
      />
    );
  })
}
  <Modal
    title = 'AI MODERATION HELP'
    open = {openHelp}
    onCancel = {handleHelp}
    footer = {null}
    width = {'1000px'}
  >
    <div className = 'help-content'>
      <p>Berry Bot is capable of moderating your chat on its own. These setting control how strict or lenient you want berry to be. The lower the sensitity the stricter the bot will be. Each category can be changed individually to adjust to your stream. If the threshold is met then a player will be timed out or banned depending on what you set. </p>
    </div>
  </Modal>
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
    width: auto;
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
        align-items: center;
        flex-direction: column;

    }

    .subtitle {
        font-size: ${(pr) => pr.theme.font.size.medium};
        color: ${(pr) => pr.theme.colors.berry};
        margin-left: 10px;
        margin-top: 5px;
    }

`