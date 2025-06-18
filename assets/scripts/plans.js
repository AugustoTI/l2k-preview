const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  currency: "BRL",
  style: "currency",
});

document.querySelectorAll(".plan").forEach((plan) => {
  const base = parseFloat(plan.dataset.base);
  const totalEl = plan.querySelector("#plan-price");
  const checkboxes = plan.querySelectorAll('input[type="checkbox"]');

  const updatePrice = () => {
    let total = base;
    checkboxes.forEach((cb) => {
      if (cb.checked) total += parseFloat(cb.dataset.extra);
    });

    const totalAsNumber = Number(total.toFixed(2));

    totalEl.textContent = currencyFormatter.format(totalAsNumber);
  };

  checkboxes.forEach((cb) => cb.addEventListener("change", updatePrice));
});
