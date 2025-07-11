const educationHistory = [
  { id: 1, period: '2023 - Sekarang', institution: 'Universitas AMIKOM Yogyakarta', major: 'S1 - Informatika' },
  { id: 2, period: '2019 - 2022', institution: 'SMANSA PUMA', major: 'MIPA' }
];

export default function handler(req, res) {
  res.status(200).json(educationHistory);
}
