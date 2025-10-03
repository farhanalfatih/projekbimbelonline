import Navbar from "@/app/components/navbar/navbar";
import Herosection from "@/app/section/herosection";
import Aboutsection from "@/app/section/aboutsection";
import Teamsection from "@/app/section/teamsection";
import Kenapakami from "@/app/section/kenapasection";
import Faq from "@/app/section/faq";
import Listcoursesection from "@/app/section/listcoursesection";

export default function Home() {
  return (
    <main className="text-black">
      <section className="pt-10">
        <Herosection />
      </section>
      <section className="pt-10">
        <Aboutsection />
      </section>
      <section className="pt-20">
        <Teamsection />
      </section>
      <section className="pt-20">
        <Kenapakami />
      </section>
      <section className="pt-20">
        <Faq />
      </section>
       <section className="pt-20">
        // testimoni
      </section>
      <section className="pt-20">
        // list harga
      </section>
      <section className="pt-20">
        AYO MULAI BELAJAR DENGAN KAMI SEKARANG JUGA!, DENGAN SUBSCRIBE PAKET PREMIUM KAMU AKAN MENDAPATKAN BANYAK SEKALI MANFAATNYA
        1. AKSES KE SEMUA KONTEN PREMIUM
        2. MATERI TERUPDATE
        LIHAT SELENGKAP NYA 
        <a href=""></a>
      </section>
    </main>
  );
}
