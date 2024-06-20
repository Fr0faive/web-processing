import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="w-full flex justify-center items-center flex-col gap-3">
        <h1 className="text-3xl uppercase font-semibold font-sans">
          Kelompok 4
        </h1>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="p-2 w-72 text-start">Name</th>
              <th className="p-2">NIM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Faikar Moch Tajudin</td>
              <td className="p-2">1217050052</td>
            </tr>
            <tr>
              <td className="p-2">Abdul Aziz</td>
              <td className="p-2">1217050053</td>
            </tr>
            <tr>
              <td className="p-2">Ahmad Fikri</td>
              <td className="p-2">1217050054</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
