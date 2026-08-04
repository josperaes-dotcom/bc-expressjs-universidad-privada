// ============================================
// ENTRY POINT — Orquesta todo el flujo
// ============================================

import { readEnrollments } from './reader.js';
import { filterByCategory, calculateSummary } from './processor.js';
import { writeReport } from './writer.js';
import type { Report } from './types.js';

// TODO: Parsear el argumento --category desde process.argv
// process.argv = ['node', 'script.ts', '--category', 'electronics']
// Si '--category' está en los args, el siguiente elemento es el valor.
// Si no está, el filtro debe ser null.
//
// Ejemplo:
// const args = process.argv.slice(2);
// const categoryIndex = args.indexOf('--category');
// const categoryFilter: string | null = categoryIndex !== -1 ? args[categoryIndex + 1] : null;

// Implementación
function parseCategoryArg(): string | null {
  const args = process.argv.slice(2);
  const categoryIndex = args.indexOf('--category');
  return categoryIndex !== -1 ? args[categoryIndex + 1] ?? null : null;
}

// TODO: Implementar la función main con el siguiente flujo:
// 1. Parsear los argumentos (ver arriba)
// 2. Leer los datos con readItems()
// 3. Filtrar con filterByCategory() pasando el filtro parseado
// 4. Calcular el resumen con calculateSummary()
// 5. Construir el objeto Report con: generatedAt (ISO string), appliedFilter, summary, items filtrados
// 6. Imprimir el resumen en consola (total, activos, precio promedio, categorías)
// 7. Escribir el reporte en disco con writeReport()
//
// Recuerda manejar errores con try/catch y llamar process.exit(1) si algo falla.
//
// Firma esperada:
// async function main(): Promise<void>

// Implementación
async function main(): Promise<void> {
  const categoryFilter = parseCategoryArg();

  const enrollments = await readEnrollments();
  const filtered = filterByCategory(enrollments, categoryFilter);
  const summary = calculateSummary(filtered);

  const report: Report = {
    generatedAt: new Date().toISOString(),
    appliedFilter: categoryFilter,
    summary,
    items: filtered,
  };

  console.log('\n📊 Resumen del catálogo de inscripciones');
  if (categoryFilter) {
    console.log(`   Filtro aplicado: programa = "${categoryFilter}"`);
  }
  console.log(`   Total de inscripciones: ${summary.total}`);
  console.log(`   Activas: ${summary.active} | Inactivas: ${summary.inactive}`);
  console.log(`   Matrícula promedio: $${summary.averagePrice}`);
  console.log(
    `   Más cara: ${summary.mostExpensive.studentName} — ${summary.mostExpensive.course} ($${summary.mostExpensive.tuitionFee})`
  );
  console.log(
    `   Más económica: ${summary.cheapest.studentName} — ${summary.cheapest.course} ($${summary.cheapest.tuitionFee})`
  );
  console.log(`   Programas disponibles: ${summary.categories.join(', ')}\n`);

  await writeReport(report);
}

// TODO: Llamar main() al final del archivo
// main();

// Implementación
main().catch((err) => {
  const message = err instanceof Error ? err.message : String(err);
  console.error(`❌ Error: ${message}`);
  process.exit(1);
});