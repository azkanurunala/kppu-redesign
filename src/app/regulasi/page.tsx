
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Download, ChevronRight, Scale, Gavel, Newspaper, MessageSquareQuestion, Info, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const regulations = [
    {
        category: "Undang-Undang",
        items: [
            "Surat Edaran Nomor 1 Tahun 2021 tentang Peralihan Pemeriksaan Keberatan Terhadap Putusan Komisi Pengawas Persaingan Usaha ke Pengadilan Niaga",
            "Undang-Undang Nomor 20 Tahun 2008 tentang Usaha Mikro, Kecil, dan Menengah",
            "Undang-Undang Nomor 5 Tahun 1999 tentang Larangan Praktek Monopoli dan Persaingan Usaha Tidak Sehat",
            "Undang-Undang Nomor 5 Tahun 1999 tentang Larangan Praktek Monopoli dan Persaingan Usaha Tidak Sehat Dengan Amandemen Berdasarkan Putusan Mahkamah Konstitusi No. 85/PUU-XIV/2016 dan Perubahan Berdasarkan Undang-Undang No. 11 Tahun 2020 tentang Cipta Kerja",
            "Keputusan Presiden Republik Indonesia Nomor 75 Tahun 1999 tentang Komisi Pengawas Persaingan Usaha",
            "Hasil Uji Materiil Putusan MK Nomor 85/PUU-XIV/2016",
        ]
    },
    {
        category: "Peraturan Pemerintah",
        items: [
            "Peraturan Pemerintah Nomor 28 Tahun 2023 tentang Jenis dan Tarif atas Jenis Penerimaan Negara Bukan Pajak yang Berlaku pada Komisi Pengawas Persaingan Usaha",
            "Peraturan Pemerintah Nomor 44 Tahun 2021 tentang Pelaksanaan Larangan Praktek Monopoli dan Persaingan Usaha Tidak Sehat",
            "Peraturan Pemerintah Nomor 7 Tahun 2021 tentang Kemudahan, Pelindungan, dan Pemberdayaan Koperasi dan Usaha Mikro, Kecil, dan Menengah",
            "Peraturan Pemerintah Nomor 58 Tahun 2015 tentang Jenis dan Tarif atas Jenis Penerimaan Negara Bukan Pajak yang Berlaku pada Komisi Pengawas Persaingan Usaha",
            "Peraturan Pemerintah Nomor 17 Tahun 2013 tentang Pelaksanaan Undang-Undang Nomor 20 Tahun 2008 tentang Usaha Mikro, Kecil, dan Menengah",
            "Peraturan Pemerintah Nomor 57 Tahun 2010 tentang Penggabungan atau Peleburan Badan Usaha dan Pengambilalihan Saham Perusahaan yang Dapat Mengakibatkan Terjadinya Praktik Monopoli dan Persaingan Usaha Tidak Sehat",
        ]
    },
];

const sidebarNavItems = [
  { icon: FileText, label: "REGULASI" },
  { icon: Gavel, label: "PUTUSAN" },
  { icon: Newspaper, label: "JADWAL SIDANG" },
  { icon: FileText, label: "SIARAN PERS" },
  { icon: MessageSquareQuestion, label: "TANYA JAWAB" },
  { icon: Info, label: "PPID" },
];


export default function RegulasiPage() {
  let counter = 1;
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="bg-primary-dark text-white py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold font-poppins">Peraturan Perundang-Undangan</h1>
                <div className="text-sm mt-1">
                    <span>Beranda</span>
                    <ChevronRight className="inline-block h-4 w-4 mx-1" />
                    <span>Peraturan Perundang-Undangan</span>
                </div>
            </div>
        </section>

        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <Card>
                            <CardContent className="p-0">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[50px]">No.</TableHead>
                                            <TableHead>Judul</TableHead>
                                            <TableHead className="text-right w-[100px]">Tautan</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {regulations.map(reg => (
                                            <React.Fragment key={reg.category}>
                                                <TableRow className="bg-gray-100 dark:bg-gray-800">
                                                    <TableCell colSpan={3} className="font-bold text-primary-dark dark:text-white">{reg.category}</TableCell>
                                                </TableRow>
                                                {reg.items.map((item, index) => (
                                                    <TableRow key={index}>
                                                        <TableCell>{counter++}</TableCell>
                                                        <TableCell>{item}</TableCell>
                                                        <TableCell className="text-right">
                                                            <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80">
                                                                <Download className="h-5 w-5" />
                                                            </Button>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </React.Fragment>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                {sidebarNavItems.map((item, index) => (
                                    <div key={index} className={`flex items-center p-3 rounded-lg cursor-pointer hover:bg-primary/10 transition-colors ${index !== sidebarNavItems.length - 1 ? 'border-b' : ''}`}>
                                        <item.icon className="h-6 w-6 text-primary mr-4" />
                                        <span className="font-semibold text-foreground/80">{item.label}</span>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
