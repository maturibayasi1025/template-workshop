// ★ ポートフォリオの内容をここに編集してください

export const profile = {
  name: "harada daisuke",
  role: "見習いエンジニア、PAエンジニア",
  bio: "原田大輔と申します。日々勉強しながら社会の悩みを解決できるエンジニアを目指しています。また個人でPAエンジニアを行っています",
  avatarUrl: "/images/avatar.jpg", // public/images/ に画像を置いてパスを指定
};

export const skills = [
  { name: "JavaScript", level: "学習中" },
  { name: "React", level: "学習中" },
  { name: "TypeScript", level: "学習中" },
  { name: "Next.js", level: "学習中" },
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
  github: "https://github.com/DaisukeHarada1110",
  email: "h.daisuke@gmail.com",
};
