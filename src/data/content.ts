import { LanguageContent } from '../types';

export const content: Record<'id' | 'en', LanguageContent> = {
  id: {
    nav: {
      about: 'Tentang Kami',
      services: 'Layanan',
      portfolio: 'Portofolio',
      why: 'Mengapa Kami',
      contact: 'Kontak',
    },
    hero: {
      title: 'Zayyid IT Consulting',
      subtitle: 'Solusi Digital Inovatif untuk Masa Depan Bisnis Anda',
    },
    about: {
      title: 'Tentang Kami',
      description: [
        'Zayyid IT Consulting adalah perusahaan teknologi yang bergerak dalam pengembangan perangkat lunak berbasis web, mobile, dan desktop. Kami menyediakan solusi IT yang inovatif, efisien, dan disesuaikan dengan kebutuhan bisnis untuk mendukung transformasi digital secara berkelanjutan.',
        'Kami berpengalaman dalam menangani proyek-proyek kompleks dan telah dipercaya oleh berbagai perusahaan besar dalam menghadirkan solusi teknologi yang handal. Dengan tim developer yang profesional, kami siap membantu bisnis Anda berkembang melalui teknologi terkini.',
      ],
    },
    services: {
      title: 'Layanan Kami',
      items: [
        {
          title: 'Pengembangan Platform E-Commerce',
          description: 'Membangun marketplace dengan fitur lengkap seperti manajemen inventori, pembayaran online, dan analitik penjualan.',
          icon: 'shopping-cart'
        },
        {
          title: 'Pengembangan Aplikasi Mobile',
          description: 'Aplikasi berbasis iOS & Android yang responsif, cepat, dan dirancang untuk memberikan pengalaman pengguna optimal.',
          icon: 'smartphone'
        },
        {
          title: 'Pengembangan Aplikasi Desktop',
          description: 'Solusi efisien untuk meningkatkan produktivitas bisnis Anda dengan aplikasi desktop yang stabil dan aman.',
          icon: 'monitor'
        },
        {
          title: 'Sistem Manajemen Data Berbasis Cloud',
          description: 'Sistem cloud yang aman, skalabel, dan dapat diakses kapan saja serta di mana saja.',
          icon: 'cloud'
        },
        {
          title: 'Pengembangan Aplikasi Kustom',
          description: 'Solusi IT yang dirancang khusus sesuai dengan kebutuhan unik bisnis Anda, dari berbagai industri.',
          icon: 'code'
        }
      ],
    },
    portfolio: {
      title: 'Portofolio Kami',
      categories: [
        {
          title: 'E-Commerce & Retail',
          projects: [
            { name: 'Tokopedia Credit Card', description: 'Pengembangan fitur pengajuan kartu kredit di Tokopedia.' },
            { name: 'Tokopedia Emas', description: 'Sistem pembelian, penjualan, dan penyimpanan emas digital.' },
            { name: 'Tokopedia Reksadana', description: 'Platform investasi reksa dana bagi pengguna Tokopedia.' },
            { name: 'Love & Flair', description: 'Retail fashion dan lifestyle dengan platform e-commerce modern.' },
            { name: 'Indokids – Admin E-Commerce', description: 'Sistem manajemen data dan pengguna untuk bisnis e-commerce.' },
            { name: 'Momis Bakery', description: 'Website promosi untuk toko kue dan roti.' },
            { name: 'Tahibah', description: 'Website promosi untuk layanan produk dan jasa.' }
          ]
        },
        {
          title: 'Perjalanan & Pariwisata',
          projects: [
            { name: 'Mister Aladin - Flight', description: 'Sistem pencarian dan pemesanan tiket penerbangan domestik & internasional.' },
            { name: 'Mister Aladin - Xplore', description: 'Pengelolaan fitur pencarian destinasi wisata dan perjalanan.' },
            { name: 'Mister Aladin - Hotel', description: 'Sistem pencarian dan pemesanan hotel secara online.' },
            { name: 'Jagawisata', description: 'Produk asuransi jiwa untuk wisatawan di Indonesia.' }
          ]
        },
        {
          title: 'Teknologi & Startup',
          projects: [
            { name: 'Omnichat', description: 'Platform komunikasi berbasis web dengan fitur agen obrolan dan pengelolaan pelanggan.' },
            { name: 'KonneK', description: 'Sistem manajemen obrolan berbasis web.' },
            { name: 'Storial', description: 'Platform digital untuk membaca dan menulis novel.' },
            { name: 'AirShare', description: 'Aplikasi berbasis WebRTC untuk berbagi file tanpa kabel dan tanpa database.' },
            { name: 'Prowara', description: 'Sistem manajemen data dan laporan.' }
          ]
        },
        {
          title: 'Perusahaan & Korporasi',
          projects: [
            { name: 'KFC Backoffice', description: 'Sistem manajemen pesanan dan lalu lintas operasional KFC.' },
            { name: 'Netindo - Backoffice', description: 'Sistem manajemen data dan laporan pengguna.' },
            { name: 'Carbon Footprint Toyota', description: 'Aplikasi untuk melacak dan menghitung emisi karbon.' },
            { name: 'Koperasi Karyawan Toyota', description: 'Platform digital untuk mengelola keuangan koperasi karyawan Toyota.' }
          ]
        },
        {
          title: 'Event & Hiburan',
          projects: [
            { name: 'Pocari Sweat | Bintang SMA 2023', description: 'Pengembangan platform untuk kompetisi bakat online siswa SMA.' },
            { name: 'Super E-Sport Series', description: 'Platform pendaftaran dan jadwal turnamen PES & PUBG.' },
            { name: 'SuperLive', description: 'Website dengan beragam konten hiburan mulai dari musik hingga petualangan.' }
          ]
        },
        {
          title: 'Pemerintahan & Sosial',
          projects: [
            { name: 'Sumbar TV', description: 'Aplikasi livestreaming untuk konten budaya dan pariwisata Sumatera Barat.' },
            { name: 'Silahar – Sumatera Barat', description: 'Aplikasi tracking aktivitas dan log kerja pegawai pemerintahan Sumatera Barat.' },
            { name: 'Eramasjid', description: 'Platform sosial berbasis masjid untuk edukasi Islam, wakaf, dan event keagamaan.' },
            { name: 'Hasha Medika', description: 'Konsultan kesehatan yang berfokus pada laktasi, MPASI, dan terapi makan anak.' }
          ]
        },
        {
          title: 'Korporasi & Perusahaan Teknologi',
          projects: [
            { name: 'MyTens GoBeyond Telkom Indonesia', description: 'Web internal untuk manajemen proyek dan pemantauan kerja di Telkom Indonesia.' }
          ]
        }
      ]
    },
    why: {
      title: 'Mengapa Memilih Kami?',
      items: [
        { title: 'Berpengalaman', description: 'Tim developer profesional dengan jam terbang tinggi di berbagai industri.' },
        { title: 'Solusi Kustom', description: 'Teknologi yang disesuaikan dengan kebutuhan bisnis Anda.' },
        { title: 'Keamanan & Kualitas', description: 'Prioritas utama dalam setiap proyek yang kami kembangkan.' },
        { title: 'Kolaborasi & Dukungan', description: 'Kami hadir sebagai mitra strategis untuk mendukung bisnis Anda.' },
        { title: 'Teknologi Terkini', description: 'Memanfaatkan teknologi modern untuk menciptakan solusi yang efisien dan inovatif.' }
      ]
    },
    contact: {
      title: 'Hubungi Kami',
      subtitle: 'Kami siap membantu Anda dalam menciptakan solusi teknologi terbaik untuk bisnis Anda. Hubungi kami sekarang!',
      cta: 'Konsultasi Gratis Sekarang',
      info: {
        email: 'contact@zayyidit.com',
        phone: '+62 812-3456-7890',
        address: 'Jakarta, Indonesia'
      }
    }
  },
  en: {
    nav: {
      about: 'About Us',
      services: 'Services',
      portfolio: 'Portfolio',
      why: 'Why Us',
      contact: 'Contact',
    },
    hero: {
      title: 'Zayyid IT Consulting',
      subtitle: 'Innovative Digital Solutions for Your Business Future',
    },
    about: {
      title: 'About Us',
      description: [
        'Zayyid IT Consulting is a technology company specializing in web, mobile, and desktop software development. We provide innovative, efficient IT solutions tailored to business needs to support sustainable digital transformation.',
        'We have experience handling complex projects and have been trusted by various large companies in delivering reliable technology solutions. With a professional developer team, we are ready to help your business grow through the latest technology.',
      ],
    },
    services: {
      title: 'Our Services',
      items: [
        {
          title: 'E-Commerce Platform Development',
          description: 'Building marketplaces with complete features such as inventory management, online payments, and sales analytics.',
          icon: 'shopping-cart'
        },
        {
          title: 'Mobile App Development',
          description: 'iOS & Android based applications that are responsive, fast, and designed to provide optimal user experience.',
          icon: 'smartphone'
        },
        {
          title: 'Desktop App Development',
          description: 'Efficient solutions to increase your business productivity with stable and secure desktop applications.',
          icon: 'monitor'
        },
        {
          title: 'Cloud-Based Data Management',
          description: 'Secure, scalable cloud systems that can be accessed anytime, anywhere.',
          icon: 'cloud'
        },
        {
          title: 'Custom Application Development',
          description: 'IT solutions specially designed according to your unique business needs, across various industries.',
          icon: 'code'
        }
      ],
    },
    portfolio: {
      title: 'Our Portfolio',
      categories: [
        {
          title: 'E-Commerce & Retail',
          projects: [
            { name: 'Tokopedia Credit Card', description: 'Development of credit card application feature in Tokopedia.' },
            { name: 'Tokopedia Gold', description: 'Digital gold buying, selling, and storage system.' },
            { name: 'Tokopedia Mutual Funds', description: 'Mutual fund investment platform for Tokopedia users.' },
            { name: 'Love & Flair', description: 'Fashion and lifestyle retail with modern e-commerce platform.' },
            { name: 'Indokids – E-Commerce Admin', description: 'Data and user management system for e-commerce business.' },
            { name: 'Momis Bakery', description: 'Promotional website for cake and bread store.' },
            { name: 'Tahibah', description: 'Promotional website for products and services.' }
          ]
        },
        {
          title: 'Travel & Tourism',
          projects: [
            { name: 'Mister Aladin - Flight', description: 'Domestic & international flight search and booking system.' },
            { name: 'Mister Aladin - Xplore', description: 'Tourist destination and travel search feature management.' },
            { name: 'Mister Aladin - Hotel', description: 'Online hotel search and booking system.' },
            { name: 'Jagawisata', description: 'Life insurance product for tourists in Indonesia.' }
          ]
        },
        {
          title: 'Technology & Startups',
          projects: [
            { name: 'Omnichat', description: 'Web-based communication platform with chat agent and customer management features.' },
            { name: 'KonneK', description: 'Web-based chat management system.' },
            { name: 'Storial', description: 'Digital platform for reading and writing novels.' },
            { name: 'AirShare', description: 'WebRTC-based application for wireless file sharing without database.' },
            { name: 'Prowara', description: 'Data and report management system.' }
          ]
        },
        {
          title: 'Corporate & Enterprise',
          projects: [
            { name: 'KFC Backoffice', description: 'Order management and operational traffic system for KFC.' },
            { name: 'Netindo - Backoffice', description: 'User data and report management system.' },
            { name: 'Carbon Footprint Toyota', description: 'Application for tracking and calculating carbon emissions.' },
            { name: 'Toyota Employee Cooperative', description: 'Digital platform for managing Toyota employee cooperative finances.' }
          ]
        },
        {
          title: 'Events & Entertainment',
          projects: [
            { name: 'Pocari Sweat | High School Star 2023', description: 'Platform development for online high school talent competition.' },
            { name: 'Super E-Sport Series', description: 'Registration and schedule platform for PES & PUBG tournaments.' },
            { name: 'SuperLive', description: 'Website with various entertainment content from music to adventure.' }
          ]
        },
        {
          title: 'Government & Social',
          projects: [
            { name: 'Sumbar TV', description: 'Livestreaming application for West Sumatra cultural and tourism content.' },
            { name: 'Silahar – West Sumatra', description: 'Activity tracking and work log application for West Sumatra government employees.' },
            { name: 'Eramasjid', description: 'Mosque-based social platform for Islamic education, waqf, and religious events.' },
            { name: 'Hasha Medika', description: 'Health consultant focusing on lactation, complementary feeding, and child eating therapy.' }
          ]
        },
        {
          title: 'Corporate & Technology Companies',
          projects: [
            { name: 'MyTens GoBeyond Telkom Indonesia', description: 'Internal web for project management and work monitoring at Telkom Indonesia.' }
          ]
        }
      ]
    },
    why: {
      title: 'Why Choose Us?',
      items: [
        { title: 'Experienced', description: 'Professional developer team with extensive experience across various industries.' },
        { title: 'Custom Solutions', description: 'Technology tailored to your business needs.' },
        { title: 'Security & Quality', description: 'Top priority in every project we develop.' },
        { title: 'Collaboration & Support', description: 'We are here as strategic partners to support your business.' },
        { title: 'Latest Technology', description: 'Utilizing modern technology to create efficient and innovative solutions.' }
      ]
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We are ready to help you create the best technology solutions for your business. Contact us now!',
      cta: 'Get Free Consultation Now',
      info: {
        email: 'contact@zayyidit.com',
        phone: '+62 812-3456-7890',
        address: 'Jakarta, Indonesia'
      }
    }
  }
};