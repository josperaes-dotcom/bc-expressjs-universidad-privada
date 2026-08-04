// ============================================
// ENTRY POINT — Orquesta la ejecución
// ============================================

import { readProducts } from './reader.js';
import { generateReport } from './processor.js';

async function main(): Promise<void> {
  try {
    console.log('Reading product data...\n');

    const products = await readProducts();
    const report = generateReport(products);

    console.log('=== Product Report ===');
    console.log(`Total products:          ${report.totalProducts}`);
    console.log(`Total inventory value:   $${report.totalValue.toFixed(2)}`);
    console.log(`Categories:              ${report.categories.join(', ')}`);

    if (report.lowStockItems.length > 0) {
      console.log('\nLow stock items (< 5 units):');

      report.lowStockItems.forEach((product) => {
        console.log(
          `  - ${product.name} (stock: ${product.stock})`
        );
      });
    } else {
      console.log('\nAll items have sufficient stock.');
    }
  } catch (error) {
    console.error(
      'Error:',
      error instanceof Error ? error.message : error
    );

    process.exit(1);
  }
}

main();     