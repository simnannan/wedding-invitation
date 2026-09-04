import Countdown from "./Countdown";

export default function Home() {
  return (
    <div className="page">
      <main className="layout">
        <section className="panel">
          <div className="card hero-card">
            <p className="eyebrow">TARO &amp; HANAKO</p>
            <h1 className="date">2099.12.31</h1>
            <p className="subline">SUNDAY 11:00AM</p>
            <div className="divider" />
            <Countdown target="2099-12-31T11:00:00+09:00" />
          </div>

          <div className="card response-card">
            <p>
              お手数ではございますが
              <br />
              <span className="emphasis">2099年12月1日(月)</span> までに
              <br />
              ご一報くださいますようお願いします
            </p>
            <button className="primary-button" type="button">
              招待状に回答
            </button>
          </div>
        </section>

        <aside className="phone-card">
          <div className="phone-header">
            <button className="menu" type="button" aria-label="Open menu">
              <span />
              <span />
              <span />
            </button>
          </div>
          <div className="phone-body">
            <div className="vertical-title">結婚式招待状</div>
            <div className="phone-divider" />
            <div className="signature">
              <p>TARO &amp; HANAKO</p>
              <span>2099.12.31</span>
            </div>
          </div>
          <div className="mizuhiki">
            <span className="mizuhiki-knot" />
            <span className="mizuhiki-line" />
          </div>
        </aside>
      </main>
      <div className="scroll-indicator">scroll</div>
    </div>
  );
}
