import Bar from "../components/Bar";
import { languages, tools } from "../data";

const resume = () => {
  return (
    <div className="p-4">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
        </div>
        <div>
          <h5 className="my-2 text-xl font-bold">bousiritudaigakukenntikugakkazaisekityuu</h5>
          <p className="my-3">aiuekoookokokokokokokokokokokokkokokokokokokok</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
        </div>
        <div>
          <h5 className="my-2 text-xl font-bold">bousiritudaigakukenntikugakkazaisekityuu</h5>
          <p className="my-3">aiuekoookokokokokokokokokokokokkokokokokokokok</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
        <div className="my-2">
          {
            languages.map(Language => (<Bar data={Language} key={Language.name} />
          ))}
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
        <div className="my-2">
          {
            tools.map(tool => (<Bar data={tool} key={tool.name} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default resume;