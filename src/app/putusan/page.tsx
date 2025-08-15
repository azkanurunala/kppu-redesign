
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Download, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

const decisions = [
    { no: 1, decisionNumber: "19/KPPU-M/2024", about: "DUGAAN PELANGGARAN TERKAIT KETERLAMBATAN PEMBERITAHUAN PENGAMBILALIHAN SAHAM EMERALD GRAIN PTY., LTD., (SEKARANG BERNAMA LOUIS DREYFUS COMPANY EMERALD AUSTRALIA PTY., LTD.) OLEH LOUIS DREYFUS COMPANY MELBOURNE HOLDINGS PTY., LTD.", date: "11 Agustus 2025" },
    { no: 2, decisionNumber: "21/KPPU-M/2024", about: "DUGAAN PELANGGARAN TERKAIT KETERLAMBATAN PEMBERITAHUAN PENGAMBILALIHAN SAHAM POSITION PARTNER PTY. LTD. OLEH MITSUI & CO., LTD. DAN MITSUI & CO. (AUSTRALIA) LTD.", date: "11 Agustus 2025" },
    { no: 3, decisionNumber: "18/KPPU-L/2024", about: "DUGAAN PELANGGARAN PASAL 14 DAN 19 HURUF A, B, C DAN D UNDANG-UNDANG NOMOR 5 TAHUN 1999 TERKAIT PENJUALAN TRUK MEREK SANY DI INDONESIA", date: "05 Agustus 2025" },
    { no: 4, decisionNumber: "17/KPPU-L/2024", about: "DUGAAN PELANGGARAN PASAL 22 UU NOMOR 5 TAHUN 1999 TERKAIT PENGADAAN PEKERJAAN KONSTRUKSI PEMBANGUNAN JEMBATAN SINTONG KABUPATEN ROKAN HILIR TAHUN ANGGARAN 2023", date: "28 Juli 2025" },
    { no: 5, decisionNumber: "14/KPPU-L/2024", about: "DUGAAN PELANGGARAN PASAL 22 UNDANG-UNDANG NOMOR 5 TAHUN 1999 TERKAIT PENGADAAN TRANSPORTASI DARAT UNTUK PEMASOKAN ELECTRIC MULTIPLE UNIT (EMU) UNTUK PROYEK JAKARTA BANDUNG HIGH SPEED RAILWAYS PROJECT", date: "22 Juli 2025" },
    { no: 6, decisionNumber: "11/KPPU-L/2024", about: "DUGAAN PELANGGARAN PASAL 22 UNDANG-UNDANG NOMOR 5 TAHUN 1999 TERKAIT PENGADAAN BADAN USAHA PENYEDIA AIR BERSIH DENGAN TEKNOLOGI SWRO (PRAKARSA BADAN USAHA) PADA PERUSAHAAN DAERAH AIR MINUM (PDAM) KABUPATEN LOMBOK UTARA TAHUN ANGGARAN 2017", date: "30 Juni 2025" },
    { no: 7, decisionNumber: "20/KPPU-M/2024", about: "DUGAAN PELANGGARAN TERKAIT KETERLAMBATAN PEMBERITAHUAN PENGAMBILALIHAN SAHAM PT ROYAL LESTARI UTAMA OLEH COMPAGNIE FINANCIERE MICHELIN SOCIETE PAR ACTIONS SIMPLIFIEE A ASSOCIE UNIQUE (CFM)", date: "10 Juni 2025" },
    { no: 8, decisionNumber: "14/KPPU-K/2023", about: "DUGAAN PELANGGARAN PASAL 35 AYAT (1) UNDANG-UNDANG NOMOR 20 TAHUN 2008 TERKAIT PELAKSANAAN KEMITRAAN BAGI HASIL DI SEKTOR PELAYANAN KESEHATAN ANTARA PT KIMIA FARMA DIAGNOSTIKA DAN MITRA DOKTER UMUM/GIGI", date: "26 Mei 2025" },
    { no: 9, decisionNumber: "08/KPPU-L/2024", about: "DUGAAN PELANGGARAN PASAL 23 UNDANG-UNDANG NOMOR 5 TAHUN 1999 TERKAIT PERSEKONGKOLAN UNTUK MENDAPATKAN RAHASIA PERUSAHAAN PT CHIYODA KOGYO INDONESIA", date: "25 Februari 2025" },
    { no: 10, decisionNumber: "15/KPPU-M/2024", about: "DUGAAN PELANGGARAN TERKAIT KETERLAMBATAN PEMBERITAHUAN PENGAMBILALIHAN SAHAM PT MITRA PINASTHIKA MUSTIKA RENT OLEH TRUSTY CARS PTE. LTD.", date: "24 Februari 2025" },
];

const CityscapeFooter = () => (
    <div className="relative h-32 md:h-48 mt-16 overflow-hidden">
        <div 
            className="absolute bottom-0 left-0 w-full h-full bg-no-repeat bg-bottom bg-contain"
            style={{ 
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' viewBox=\'0 0 1440 192\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,112C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,192L1392,192C1344,192,1248,192,1152,192C1056,192,960,192,864,192C768,192,672,192,576,192C480,192,384,192,288,192C192,192,96,192,48,192L0,192Z\' fill=\'%233B82F6\' fill-opacity=\'0.3\'%3E%3C/path%3E%3Cpath d=\'M0,128L40,133.3C80,139,160,149,240,138.7C320,128,400,96,480,90.7C560,85,640,107,720,128C800,149,880,171,960,165.3C1040,160,1120,128,1200,101.3C1280,75,1360,53,1400,42.7L1440,32L1440,192L1400,192C1360,192,1280,192,1200,192C1120,192,1040,192,960,192C880,192,800,192,720,192C640,192,560,192,480,192C400,192,320,192,240,192C160,192,80,192,40,192L0,192Z\' fill=\'%23112444\' fill-opacity=\'0.7\'%3E%3C/path%3E%3C/svg%3E")',
                backgroundSize: '200% 100%',
                animation: 'wave-animation 15s linear infinite',
            }}
        />
        <style jsx>{`
            @keyframes wave-animation {
                0% { background-position: 0% 0; }
                100% { background-position: -200% 0; }
            }
        `}</style>
    </div>
);


export default function PutusanPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-800">
      <Header />

      <section className="bg-primary-dark text-white py-6 shadow-md">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold font-poppins">DATABASE PUTUSAN KPPU</h1>
            </div>
      </section>
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6 text-primary-dark">DAFTAR PUTUSAN KPPU</h2>
        
        <Card className="mb-8">
            <div className="p-4 flex items-center gap-4">
                <Button className="bg-primary-dark hover:bg-primary-dark/90">Pencarian Dinamis</Button>
                <div className="relative flex-grow">
                    <Input placeholder="pencarian cepat" className="pl-10" />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
            </div>
        </Card>
        
        <Card>
            <Table>
                <TableHeader>
                    <TableRow className="bg-primary-dark hover:bg-primary-dark">
                        <TableHead className="w-12"></TableHead>
                        <TableHead className="w-12 text-white font-bold">No.</TableHead>
                        <TableHead className="w-48 text-white font-bold">Nomor Putusan</TableHead>
                        <TableHead className="text-white font-bold">Tentang</TableHead>
                        <TableHead className="w-48 text-white font-bold">Tanggal Putusan</TableHead>
                        <TableHead className="w-32 text-center text-white font-bold">File Download</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {decisions.map((item) => (
                        <TableRow key={item.no}>
                            <TableCell>
                                <Button variant="ghost" size="icon">
                                    <Search className="h-5 w-5 text-primary" />
                                </Button>
                            </TableCell>
                            <TableCell>{item.no}</TableCell>
                            <TableCell>{item.decisionNumber}</TableCell>
                            <TableCell>{item.about}</TableCell>
                            <TableCell>{item.date}</TableCell>
                            <TableCell className="text-center">
                                <Button variant="ghost" size="icon" className="text-blue-500 hover:text-blue-600">
                                    <Download className="h-6 w-6" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="flex items-center justify-between p-4 border-t">
                <span className="text-sm text-gray-600">1 sampai 10 dari 424</span>
                <div className="flex items-center space-x-2">
                    <Button variant="outline" size="icon" disabled>
                        <ChevronsLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" disabled>
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                        <ChevronsRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </Card>
      </main>
      
      <CityscapeFooter />
    </div>
  );
}

