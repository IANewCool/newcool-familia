'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type Tab = 'inicio' | 'pension' | 'derechos' | 'tramites' | 'recursos';

const TABLA_PORCENTAJES = [
  { hijos: 1, minimo: 20, maximo: 30, sugerido: 25 },
  { hijos: 2, minimo: 30, maximo: 40, sugerido: 35 },
  { hijos: 3, minimo: 40, maximo: 50, sugerido: 45 },
  { hijos: 4, minimo: 50, maximo: 60, sugerido: 55 },
];

const DERECHOS_HIJOS = [
  { derecho: 'Pension de alimentos', descripcion: 'Derecho a recibir dinero para alimentacion, vestuario, educacion, salud y vivienda', icon: '💰' },
  { derecho: 'Relacion directa y regular', descripcion: 'Derecho a mantener contacto con ambos padres (visitas)', icon: '👨‍👩‍👧' },
  { derecho: 'Educacion', descripcion: 'Ambos padres deben contribuir a la educacion del hijo', icon: '📚' },
  { derecho: 'Salud', descripcion: 'Cobertura medica y dental obligatoria', icon: '🏥' },
  { derecho: 'Recreacion', descripcion: 'Actividades extracurriculares y vacaciones', icon: '⚽' },
  { derecho: 'Vivienda', descripcion: 'Un lugar digno donde vivir', icon: '🏠' },
];

const TRAMITES_FAMILIA = [
  { nombre: 'Demanda de alimentos', descripcion: 'Iniciar juicio de alimentos', url: 'https://www.pjud.cl/tribunales-de-familia', icon: '⚖️' },
  { nombre: 'Mediacion familiar', descripcion: 'Proceso obligatorio antes de demandar', url: 'https://www.mediacionchile.cl', icon: '🤝' },
  { nombre: 'Modificar pension', descripcion: 'Aumentar o disminuir monto', url: 'https://www.pjud.cl/tribunales-de-familia', icon: '📝' },
  { nombre: 'Consulta de causas', descripcion: 'Revisar estado de tu caso', url: 'https://www.pjud.cl/consulta-de-causas', icon: '🔍' },
];

export default function FamiliaModule() {
  const [activeTab, setActiveTab] = useState<Tab>('inicio');

  const tabs = [
    { id: 'inicio' as Tab, label: 'Tribunales Familia', icon: '👨‍👩‍👧' },
    { id: 'pension' as Tab, label: 'Calculadora Pension', icon: '🧮' },
    { id: 'derechos' as Tab, label: 'Derechos', icon: '⚖️' },
    { id: 'tramites' as Tab, label: 'Tramites', icon: '📋' },
    { id: 'recursos' as Tab, label: 'Recursos', icon: '🔗' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
      <header className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-4xl">👨‍👩‍👧</span>
              <div>
                <h1 className="text-2xl font-bold text-white">NewCool <span className="text-pink-400">Familia</span></h1>
                <p className="text-sm text-gray-400">Tribunales de Familia Chile</p>
              </div>
            </div>
            <a href="https://newcool-informada.vercel.app" className="text-sm text-pink-400 hover:text-pink-300">NewCooltura Informada →</a>
          </div>
        </div>
      </header>

      <div className="bg-gradient-to-r from-pink-600/30 to-purple-600/30 border-b border-pink-500/30">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <p className="text-white text-sm font-medium">La mediacion es obligatoria antes de demandar</p>
              <p className="text-pink-200 text-xs">Excepto en casos de violencia intrafamiliar</p>
            </div>
          </div>
        </div>
      </div>

      <nav className="border-b border-white/10 bg-black/20 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-pink-500 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === 'inicio' && <InicioView />}
        {activeTab === 'pension' && <PensionCalculator />}
        {activeTab === 'derechos' && <DerechosView />}
        {activeTab === 'tramites' && <TramitesView />}
        {activeTab === 'recursos' && <RecursosView />}
      </main>

      <footer className="border-t border-white/10 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            NewCool Familia - <a href="https://newcool-informada.vercel.app" className="text-pink-400">NewCooltura Informada</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

function InicioView() {
  return (
    <div className="space-y-8">
      <div className="text-center py-4">
        <span className="text-6xl mb-4 block">👨‍👩‍👧</span>
        <h2 className="text-3xl font-bold text-white mb-4">Tribunales de <span className="text-pink-400">Familia</span></h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Resuelven conflictos familiares: pension de alimentos, custodia, visitas, divorcio y violencia intrafamiliar.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-pink-500/20 rounded-xl p-6 border border-pink-500/30 text-center">
          <span className="text-4xl mb-3 block">💰</span>
          <h3 className="font-bold text-white mb-2">Alimentos</h3>
          <p className="text-sm text-gray-400">Pension para hijos</p>
        </div>
        <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-500/30 text-center">
          <span className="text-4xl mb-3 block">👶</span>
          <h3 className="font-bold text-white mb-2">Custodia</h3>
          <p className="text-sm text-gray-400">Cuidado personal</p>
        </div>
        <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-500/30 text-center">
          <span className="text-4xl mb-3 block">💔</span>
          <h3 className="font-bold text-white mb-2">Divorcio</h3>
          <p className="text-sm text-gray-400">Disolucion matrimonio</p>
        </div>
      </div>

      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Datos Importantes</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-black/20 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-pink-400">40%</p>
            <p className="text-sm text-white">Tope maximo pension</p>
            <p className="text-xs text-gray-500">(1 hijo)</p>
          </div>
          <div className="bg-black/20 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-pink-400">50%</p>
            <p className="text-sm text-white">Tope maximo pension</p>
            <p className="text-xs text-gray-500">(2+ hijos)</p>
          </div>
          <div className="bg-black/20 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-pink-400">$100.000</p>
            <p className="text-sm text-white">Minimo por hijo</p>
            <p className="text-xs text-gray-500">(referencial)</p>
          </div>
          <div className="bg-black/20 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-pink-400">60 dias</p>
            <p className="text-sm text-white">Plazo mediacion</p>
            <p className="text-xs text-gray-500">(obligatoria)</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-2xl p-8 border border-pink-500/30">
        <h3 className="text-xl font-bold text-white mb-4">Proceso de Demanda de Alimentos</h3>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { s: '1', t: 'Mediacion', d: 'Obligatoria' },
            { s: '2', t: 'Demanda', d: 'Con abogado o CAJ' },
            { s: '3', t: 'Audiencia', d: 'Preparatoria' },
            { s: '4', t: 'Juicio', d: 'Presentar pruebas' },
            { s: '5', t: 'Sentencia', d: 'Fija pension' },
          ].map((i, idx) => (
            <div key={idx} className="text-center">
              <div className="w-12 h-12 rounded-full bg-pink-500 text-white font-bold text-xl flex items-center justify-center mx-auto mb-3">
                {i.s}
              </div>
              <h4 className="font-bold text-white text-sm">{i.t}</h4>
              <p className="text-xs text-gray-400">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PensionCalculator() {
  const [ingresoAlimentante, setIngresoAlimentante] = useState<number>(800000);
  const [numHijos, setNumHijos] = useState<number>(1);
  const [edadMenor, setEdadMenor] = useState<number>(8);
  const [tieneNecesidadesEspeciales, setTieneNecesidadesEspeciales] = useState<boolean>(false);
  const [educacionPrivada, setEducacionPrivada] = useState<boolean>(false);
  const [calculado, setCalculado] = useState(false);

  const calcularPension = () => {
    const tabla = TABLA_PORCENTAJES.find(t => t.hijos === Math.min(numHijos, 4)) || TABLA_PORCENTAJES[0];
    let porcentajeBase = tabla.sugerido;

    if (tieneNecesidadesEspeciales) porcentajeBase += 5;
    if (educacionPrivada) porcentajeBase += 3;
    if (edadMenor < 5) porcentajeBase += 2;

    const pensionSugerida = Math.round((ingresoAlimentante * porcentajeBase) / 100);
    const pensionMinima = Math.round((ingresoAlimentante * tabla.minimo) / 100);
    const pensionMaxima = Math.round((ingresoAlimentante * tabla.maximo) / 100);
    const pensionPorHijo = Math.round(pensionSugerida / numHijos);
    const minimoLegal = 100000 * numHijos;

    return {
      porcentajeBase,
      pensionSugerida: Math.max(pensionSugerida, minimoLegal),
      pensionMinima: Math.max(pensionMinima, minimoLegal),
      pensionMaxima,
      pensionPorHijo: Math.max(pensionPorHijo, 100000),
      minimoLegal,
      tabla
    };
  };

  const resultado = calculado ? calcularPension() : null;

  return (
    <div className="space-y-8">
      <div className="text-center py-4">
        <span className="text-5xl mb-4 block">🧮</span>
        <h2 className="text-2xl font-bold text-white mb-2">Calculadora de Pension de Alimentos</h2>
        <p className="text-gray-400">Estima la pension que podria corresponder segun la ley chilena</p>
      </div>

      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-2">💰 Ingreso del alimentante (mensual)</label>
              <input
                type="number"
                value={ingresoAlimentante}
                onChange={(e) => { setIngresoAlimentante(Number(e.target.value)); setCalculado(false); }}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white text-lg"
              />
              <p className="text-xs text-gray-500 mt-1">Sueldo liquido de quien paga la pension</p>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">👶 Numero de hijos</label>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((n) => (
                  <button
                    key={n}
                    onClick={() => { setNumHijos(n); setCalculado(false); }}
                    className={`py-3 rounded-lg font-bold text-lg transition-all ${
                      numHijos === n ? 'bg-pink-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">📅 Edad del menor (anos)</label>
              <input
                type="number"
                min="0"
                max="24"
                value={edadMenor}
                onChange={(e) => { setEdadMenor(Number(e.target.value)); setCalculado(false); }}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white"
              />
              <p className="text-xs text-gray-500 mt-1">Hasta 21 estudiando, 28 con discapacidad</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="necesidades"
                  checked={tieneNecesidadesEspeciales}
                  onChange={(e) => { setTieneNecesidadesEspeciales(e.target.checked); setCalculado(false); }}
                  className="w-5 h-5 accent-pink-500"
                />
                <label htmlFor="necesidades" className="text-white">Hijo con necesidades especiales</label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="educacion"
                  checked={educacionPrivada}
                  onChange={(e) => { setEducacionPrivada(e.target.checked); setCalculado(false); }}
                  className="w-5 h-5 accent-pink-500"
                />
                <label htmlFor="educacion" className="text-white">Educacion privada o especial</label>
              </div>
            </div>

            <button
              onClick={() => setCalculado(true)}
              className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl text-lg hover:from-pink-600 hover:to-purple-700 transition-all"
            >
              🧮 Calcular Pension
            </button>
          </div>

          <div>
            {!calculado || !resultado ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <span className="text-6xl block mb-4">👨‍👩‍👧</span>
                  <p>Ingresa los datos y presiona calcular</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white mb-4">📋 Estimacion de Pension:</h3>

                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-xl p-6 border border-pink-500/30">
                  <p className="text-sm text-gray-400">Pension sugerida total</p>
                  <p className="text-4xl font-bold text-pink-400">${resultado.pensionSugerida.toLocaleString('es-CL')}</p>
                  <p className="text-sm text-gray-400 mt-1">{resultado.porcentajeBase}% del ingreso</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-400">Por hijo</p>
                      <p className="text-xl font-bold text-white">${resultado.pensionPorHijo.toLocaleString('es-CL')}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">Hijos</p>
                      <p className="text-xl font-bold text-white">{numHijos}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <p className="text-sm text-gray-400 mb-2">Rango estimado</p>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-xs text-gray-500">Minimo</p>
                      <p className="font-bold text-green-400">${resultado.pensionMinima.toLocaleString('es-CL')}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Maximo</p>
                      <p className="font-bold text-orange-400">${resultado.pensionMaxima.toLocaleString('es-CL')}</p>
                    </div>
                  </div>
                  <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 via-pink-500 to-orange-500" style={{ width: '100%' }} />
                  </div>
                </motion.div>

                <div className="bg-yellow-500/20 rounded-lg p-4 border border-yellow-500/30">
                  <p className="text-sm text-yellow-200">
                    <strong>⚠️ Importante:</strong> Este calculo es referencial. El monto final lo determina el juez.
                  </p>
                </div>

                <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-500/30">
                  <p className="text-sm text-blue-200">
                    <strong>💡 Tip:</strong> Reune boletas de gastos del menor para respaldar tus necesidades.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">📊 Tabla de Referencia (% del ingreso)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 text-gray-400">Hijos</th>
                <th className="text-center py-3 text-gray-400">Minimo</th>
                <th className="text-center py-3 text-gray-400">Sugerido</th>
                <th className="text-center py-3 text-gray-400">Maximo</th>
              </tr>
            </thead>
            <tbody>
              {TABLA_PORCENTAJES.map((row) => (
                <tr key={row.hijos} className="border-b border-white/5">
                  <td className="py-3 text-white font-medium">{row.hijos} hijo{row.hijos > 1 ? 's' : ''}</td>
                  <td className="py-3 text-center text-green-400">{row.minimo}%</td>
                  <td className="py-3 text-center text-pink-400 font-bold">{row.sugerido}%</td>
                  <td className="py-3 text-center text-orange-400">{row.maximo}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-4">* Porcentajes referenciales. Tope legal: 50% del ingreso.</p>
      </div>
    </div>
  );
}

function DerechosView() {
  return (
    <div className="space-y-8">
      <div className="text-center py-4">
        <span className="text-5xl mb-4 block">⚖️</span>
        <h2 className="text-2xl font-bold text-white mb-2">Derechos de los Hijos</h2>
        <p className="text-gray-400">Protegidos por la ley chilena</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {DERECHOS_HIJOS.map((d, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-pink-500/50 transition-all">
            <div className="flex items-start gap-4">
              <span className="text-3xl">{d.icon}</span>
              <div>
                <h4 className="font-bold text-white">{d.derecho}</h4>
                <p className="text-sm text-gray-400 mt-1">{d.descripcion}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-2xl p-8 border border-pink-500/30">
        <h3 className="text-xl font-bold text-white mb-4">📋 Que cubre la pension de alimentos</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: '🍎', titulo: 'Alimentacion', items: ['Comida diaria', 'Leche, panales', 'Colaciones'] },
            { icon: '👕', titulo: 'Vestuario', items: ['Ropa y calzado', 'Uniforme escolar', 'Ropa de temporada'] },
            { icon: '📚', titulo: 'Educacion', items: ['Matricula y mensualidad', 'Utiles escolares', 'Transporte escolar'] },
          ].map((cat, i) => (
            <div key={i} className="bg-black/20 rounded-lg p-4">
              <span className="text-2xl">{cat.icon}</span>
              <h4 className="font-bold text-white mt-2">{cat.titulo}</h4>
              <ul className="text-sm text-gray-400 mt-2 space-y-1">
                {cat.items.map((item, j) => (<li key={j}>• {item}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TramitesView() {
  return (
    <div className="space-y-8">
      <div className="text-center py-4">
        <span className="text-5xl mb-4 block">📋</span>
        <h2 className="text-2xl font-bold text-white mb-2">Tramites de Familia</h2>
        <p className="text-gray-400">Gestiones ante tribunales</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {TRAMITES_FAMILIA.map((t, i) => (
          <a key={i} href={t.url} target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 border border-white/10 group transition-all">
            <span className="text-4xl mb-4 block">{t.icon}</span>
            <h3 className="font-bold text-white group-hover:text-pink-400">{t.nombre}</h3>
            <p className="text-sm text-gray-400 mt-2">{t.descripcion}</p>
          </a>
        ))}
      </div>

      <div className="bg-green-500/20 rounded-2xl p-8 border border-green-500/30">
        <h3 className="text-xl font-bold text-white mb-4">🆓 Asistencia Legal Gratuita</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-black/20 rounded-lg p-4">
            <h4 className="font-bold text-white mb-2">Corporacion de Asistencia Judicial (CAJ)</h4>
            <p className="text-sm text-gray-400">Abogados gratuitos para personas de escasos recursos</p>
            <p className="text-green-400 font-bold mt-2">600 440 2000</p>
          </div>
          <div className="bg-black/20 rounded-lg p-4">
            <h4 className="font-bold text-white mb-2">Centros de Mediacion</h4>
            <p className="text-sm text-gray-400">Mediacion familiar gratuita</p>
            <p className="text-green-400 font-bold mt-2">mediacionchile.cl</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RecursosView() {
  return (
    <div className="space-y-8">
      <div className="text-center py-4">
        <span className="text-5xl mb-4 block">🔗</span>
        <h2 className="text-2xl font-bold text-white mb-2">Recursos</h2>
        <p className="text-gray-400">Enlaces utiles</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { nombre: 'Poder Judicial', url: 'https://www.pjud.cl', icon: '⚖️', desc: 'Tribunales de Chile' },
          { nombre: 'Mediacion Chile', url: 'https://www.mediacionchile.cl', icon: '🤝', desc: 'Centros de mediacion' },
          { nombre: 'CAJ', url: 'https://www.cajmetro.cl', icon: '👨‍⚖️', desc: 'Asistencia legal gratuita' },
          { nombre: 'Registro Civil', url: 'https://www.registrocivil.cl', icon: '📄', desc: 'Certificados' },
          { nombre: 'SernamEG', url: 'https://www.sernameg.gob.cl', icon: '👩', desc: 'Servicio mujer' },
          { nombre: 'Chile Atiende', url: 'https://www.chileatiende.gob.cl', icon: '🏛️', desc: 'Informacion tramites' },
        ].map((r, i) => (
          <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 border border-white/10 group transition-all">
            <span className="text-4xl mb-4 block">{r.icon}</span>
            <h3 className="font-bold text-white group-hover:text-pink-400">{r.nombre}</h3>
            <p className="text-sm text-gray-400 mt-2">{r.desc}</p>
          </a>
        ))}
      </div>

      <div className="bg-pink-500/20 rounded-2xl p-8 border border-pink-500/30">
        <h3 className="text-xl font-bold text-white mb-4">📞 Telefonos de Emergencia</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-black/20 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-pink-400">149</p>
            <p className="text-white">Fono Familia</p>
            <p className="text-xs text-gray-500">Carabineros</p>
          </div>
          <div className="bg-black/20 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-pink-400">800 104 008</p>
            <p className="text-white">SernamEG</p>
            <p className="text-xs text-gray-500">Violencia mujer</p>
          </div>
          <div className="bg-black/20 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-pink-400">147</p>
            <p className="text-white">Fono Ninos</p>
            <p className="text-xs text-gray-500">Maltrato infantil</p>
          </div>
        </div>
      </div>
    </div>
  );
}
