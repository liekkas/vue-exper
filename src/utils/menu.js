export const DICT = {
  alarm: {name: 'alarm', label: '告警管理', icon: 'alarm'},
  alarmList: {name: 'alarmList', label: '告警流水', icon: 'alarmList'},
  alarmSetting: {name: 'alarmSetting', label: '告警配置', icon: 'setting'},
}

export const MENUS = [
  {
    ...DICT.alarm,
    children: [
      DICT.alarmList,
      DICT.alarmSetting
    ]
  },
] 