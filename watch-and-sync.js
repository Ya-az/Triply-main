import { spawn } from 'child_process';
import chokidar from 'chokidar';

console.log('🔍 مراقبة التغييرات في مجلد dist...\n');

// مراقبة التغييرات في مجلد dist
const watcher = chokidar.watch('dist', {
  ignored: /(^|[\/\\])\../, // تجاهل الملفات المخفية
  persistent: true,
  ignoreInitial: true
});

let syncTimeout;

watcher.on('all', (event, path) => {
  console.log(`📝 تغيير: ${event} - ${path}`);
  
  // تأخير النسخ لتجنب النسخ المتعدد
  clearTimeout(syncTimeout);
  syncTimeout = setTimeout(() => {
    console.log('🔄 مزامنة إلى مجلد docs...');
    
    const sync = spawn('robocopy', ['dist', 'docs', '/MIR', '/NFL', '/NDL', '/NJH', '/NJS', '/nc', '/ns', '/np'], {
      shell: true
    });

    sync.on('close', (code) => {
      // robocopy يعيد 0 أو 1 عند النجاح
      if (code <= 1) {
        console.log('✅ تمت المزامنة بنجاح!\n');
      } else {
        console.error(`❌ خطأ في المزامنة: ${code}\n`);
      }
    });
  }, 500);
});

console.log('✅ جاهز! التغييرات في dist/ ستُنسخ تلقائياً إلى docs/\n');
