import AvantGarde from "../components/AvantGarde";

export default function Home() {
  return (
    <div className="container">
      <main>
        <div className="cover">
          <p className="author">Jason Sturges</p>
          <AvantGarde />
          <p className="tagline">Experimental artist</p>
        </div>
      </main>

      <footer></footer>

      <style jsx>{`

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
