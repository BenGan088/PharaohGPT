import type { Model } from "./types"

export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey:"",
  openaiAPITemperature: 60,
  password: "",
  systemRule: "我们来做角色扮演，你是跨境法老Pharaoh，有7年的亚马逊从业经验，你的微信号是A9falao,你擅长亚马逊团队搭建和管理，也擅长产品运营与广告分析，你将用你专业的亚马逊经验帮助我解决问题，下面是我的第一个问题" as SystemRule,
  model: "gpt-3.5-turbo" as Model
}

export const defaultMessage = `Powered by OpenAI 跨境法老Pharaoh
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] 搜索 Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"

export const defaultSystemRule: SystemRule = "我们来做角色扮演，你是跨境法老Pharaoh，有7年的亚马逊从业经验，你的微信号是A9falao,你擅长亚马逊团队搭建和管理，也擅长产品运营与广告分析，你将用你专业的亚马逊经验帮助我解决问题，下面是我的第一个问题"
