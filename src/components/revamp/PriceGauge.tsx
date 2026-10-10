export default function PriceGauge() {
  return (
    <div
      className="ha-price-gauge"
      role="img"
      aria-label="Website subscription starts at 9,999 naira monthly"
    >
      <div className="ha-gauge-ring">
        <svg className="ha-gauge-svg" viewBox="0 0 300 300" aria-hidden="true">
          <circle cx="150" cy="150" r="137" fill="white" />
          {Array.from({ length: 36 }, (_, i) => (
            <line
              key={i}
              x1="150"
              y1="31"
              x2="150"
              y2={i % 3 === 0 ? 44 : 38}
              stroke={i % 3 === 0 ? "#a7a7a7" : "#deded9"}
              strokeWidth={i % 3 === 0 ? 2 : 1}
              transform={`rotate(${i * 10} 150 150)`}
            />
          ))}
          <path
            d="M65 234 A119 119 0 1 1 256 96"
            fill="none"
            stroke="hsl(221 83% 53%)"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <line
            x1="150"
            y1="150"
            x2="225"
            y2="105"
            stroke="#0a0a0a"
            strokeWidth="4"
          />
          <circle cx="225" cy="105" r="6" fill="hsl(221 83% 53%)" />
        </svg>
        <b className="ha-gauge-mark">
          W<span>↗</span>
        </b>
        <span>STARTING FROM</span>
        <strong>₦9,999</strong>
        <small>per month</small>
      </div>
      <span className="ha-gauge-currency ha-currency-one">₦</span>
      <span className="ha-gauge-currency ha-currency-two">↗</span>
      <b>Clear scope. Agreed terms.</b>
    </div>
  );
}
