import pp from "@/assets/img/pp.png";

export default function About() {
  return (
    <section className="section flex-col-center-center" id="about">
      <div className="w-full h-full border-2 flex-row-center-between rounded-lg">
        <div className="h-full w-2/6 rounded-s-xl flex-col-end-center bg-red-400 p-8 gap-4">
          <img src={pp} className="w-32 h-32 rounded-full" alt="pp" />
        </div>
        <div className="h-full w-4/6 rounded-e-xl flex-col-start-center bg-blue-400 p-6">test</div>
      </div>
    </section>
  );
}
