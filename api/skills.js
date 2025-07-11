const skills = [
  { name: 'Vue.js', level: 'Menengah' },
  { name: 'JavaScript', level: 'Menengah' },
  { name: 'Tailwind CSS', level: 'Pemula' },
  { name: 'Node.js', level: 'Pemula' },
  { name: 'Express.js', level: 'Pemula' },
  { name: 'Git & GitHub', level: 'Menengah' },
  { name: 'HTML5 & CSS3', level: 'Mahir' }
];

export default function handler(req, res) {
  res.status(200).json(skills);
}
