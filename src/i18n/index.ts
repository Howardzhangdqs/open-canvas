export const en = {
    prompt: {},
    ui: {
        slide_text_complexity: {
            work: "Work",
            academic: "Academic",
            high_school: "High School / University",
            middle_school: "Middle School",
            elementary_school: "Elementary School",
            pre_school: "Pre-School",
        },
        dialoge: {
            placeholder: "Your prompt here ...",
        },
        card: {
            suggest: "Suggestion",
        },
        editor: {
            placeholder: "Start writing here...",
        },
    }
};

export type I18nType = Partial<typeof en>;

export const zh: I18nType = {
    prompt: {},
    ui: {
        slide_text_complexity: {
            work: "工作",
            academic: "学术",
            high_school: "高中 / 大学",
            middle_school: "初中",
            elementary_school: "小学",
            pre_school: "学龄前",
        },
        dialoge: {
            placeholder: "请输入您的提示词…",
        },
        card: {
            suggest: "修改建议",
        },
        editor: {
            placeholder: "从这里开始写作...",
        },
    }
};