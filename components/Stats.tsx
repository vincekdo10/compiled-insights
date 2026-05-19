export default function Stats() {
  const stats = [
    { value: "10+", label: "Years in the industry" },
    { value: "6", label: "Technical disciplines" },
    { value: "1", label: "Person. No middlemen." },
  ];

  return (
    <section className="border-y border-ci-border bg-ci-surface px-8 py-9">
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-4 py-4 text-center md:py-0 ${
                index === 1
                  ? "border-ci-border md:border-x md:border-y-0"
                  : ""
              }`}
            >
              <p className="text-[30px] font-extrabold leading-none tracking-tight text-ci-teal">
                {stat.value}
              </p>
              <p className="mt-1.5 text-base text-ci-hint">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
