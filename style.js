let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '"Vi Veri Veniversum Vivus Vici. Par le pouvoir de la vérité, j\'ai de mon vivant, conquis l\'univers".  - V comme Vendetta ',
    '"Preuve est faite que visages dévots et pieuses actions nous servent à enrober de sucre le Diable lui-même."  - Hamlet de William Shakespeare ',
    '"J\'ose tout ce qui sied à un homme qui n\'ose point n\'en est plus un. "  - Mcbeth  de William Shakespeare ',
    ' "La passion et les rêves sont comme le temps, rien ne peut les arrêter. Et il en sera ainsi temps qu\'il y aura des hommes prêts à donner un sens au mot liberté!"  - One piece de Eiichirō Oda ',
    ' " L\'amour engendre le sacrifice qui lui même engendre la haine et c\'est après que la souffrance entre en jeu."  - Naruto shippuden de Masashi Kishimoto ',
    ' "L\'avenir est un miroir qui reflète nos actes ". - Les écrivains de la meute ',
]
btn.addEventListener('click', function() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})