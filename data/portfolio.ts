// ★ ポートフォリオの内容をここに編集してください

export const profile = {
  name: "松本伊蕗",
  role: "未来のwebエンジニア",
  bio: "趣味は猫を愛でることとゲームすること、",
  avatarUrl: "/images/avatar.IMG_2886.HEIC", // public/images/ に画像を置いてパスを指定
};

export const skills = [
  { name: "HTML・CSS", level: "学習中" },
  { name: "JavaScript", level: "学習予定" },
  { name: "DB", level: "学習予定" },
  { name: "Linux", level: "学習予定" },
  { name: "Docker", level: "学習予定"},
  { name: "Java", level: "学習予定"},

  // 追加・削除してOK
];

export const projects = [
  {
    title: "プロジェクト名",
    description: "どんなものを作ったか、簡単な説明を書いてください。",
    techStack: ["Next.js", "TypeScript"],
    url: "https://github.com/あなたのユーザー名/リポジトリ名",
  },
  // 複数追加できます
];

export const contact = {
  github: "https://github.com/あなたのユーザー名",
  email: "あなたのメールアドレス（任意）",
};
