const educationHistory = [
  { id: 1, period: '2022 - Sekarang', institution: 'Universitas AMIKOM Yogyakarta', major: 'S1 - Informatika' },
  { id: 2, period: '2019 - 2022', institution: 'SMA Negeri 1 Contoh', major: 'MIPA' }
];

export default function handler(req, res) {
  res.status(200).json(educationHistory);
}
