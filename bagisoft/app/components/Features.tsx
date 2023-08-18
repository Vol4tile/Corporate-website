import React from 'react';

const FeatureTable = () => {

  const features = [
    {
      name: 'Çeşitli Şablonlar',
      description: 'Farklı sektörler ve amaçlar için önceden tasarlanmış şablonlar.',
    },
    {
      name: 'Özelleştirme',
      description: 'Şablonları kişiselleştirme ve kendi tasarımınızı ekleme seçenekleri.',
    },
    {
      name: 'Duyarlı Tasarım',
      description: 'Mobil cihazlarda ve farklı ekran boyutlarında iyi çalışan tasarım.',
    },
    {
      name: 'Görsel Düzenleme',
      description: 'Görselleri yükleyip, kesip biçme ve temel düzenlemeler yapabilme.',
    },
    {
      name: 'Hızlı Yükleme',
      description: 'Hızlı yükleme süreleri için optimize edilmiş sayfalar.',
    },
    {
      name: 'SEO Desteği',
      description: 'Arama motoru optimizasyonu için temel SEO ayarları ve meta veri desteği.',
    },
    {
      name: 'Form Oluşturma',
      description: 'İletişim formları ve anketler oluşturma özellikleri.',
    },
    {
      name: 'Blog Entegrasyonu',
      description: 'Blog yazıları oluşturup yayınlama ve yönetme seçenekleri.',
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="w-full max-w-2xl p-8  ">
        <h1 className="text-2xl font-bold mb-4">Website Oluşturma Özellikleri</h1>
        <table className="w-full  p-6 rounded-xl bg-white overflow-hidden  shadow-xl shadow-gray-400">
          <thead >
            <tr >
              <th className="py-2 px-4">Özellik</th>
              <th className="py-2 px-4">Açıklama</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-sky-100' : ''}>
                <td className="py-2 px-4 border text-sky-500">{feature.name}</td>
                <td className="py-2 px-4 border">{feature.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeatureTable;