const projects = [
  {
    title: 'Website Portofolio Responsi',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
    description: 'Website portofolio pribadi yang dibangun menggunakan Vue.js dan Express.js sebagai syarat kelulusan Responsi Praktikum Pemrograman Web.',
    tech: ['Vue.js', 'Express.js', 'Vercel'],
    link: '#'
  }
];

export default function handler(req, res) {
  res.status(200).json(projects);
}
