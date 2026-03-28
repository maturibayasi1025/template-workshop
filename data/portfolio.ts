// ★ ポートフォリオの内容をここに編集してください

export const profile = {
  name: "danbo",
  role: "広告プロダクトマネージャー",
  bio: "本職は広告プロダクト開発のマネジメントをやってます。かたわらNPO法人の理事長やってます。",
  avatarUrl: "/images/hosoda.png", // public/images/ に画像を置いてパスを指定
};

export const skills = [
  { name: "html/css", level: "それなり" },
  { name: "SQL", level: "少しだけ" },  
  { name: "GAS", level: "GEMINIに聞きながらやってる" },
  // 追加・削除してOK
];

export const projects = [
  {
    title: "スポーツ予約システム",
    description: "ユーザーが予約したら自動的にスプシに反映してくれるやつ。",
    techStack: ["GAS", " 簡易SQL"],
    url: "githubには上げてない、GASもgitで管理できるのか。",
  },
  // 複数追加できます
];

export const contact = {
  github: "https://github.com/danbo-suposar",
  email: "danbo@suposar.com",
};
