const program = require("commander")

// commander分为2种操作，2种操作是冲突的，只能选其一

// Options操作
program
  .version("0.0.1")
  .option("-t, --types [type]", '测试选项')
  // option这句话必须加上，用来解析参数的
  .parse(process.argv);


// 参数长度不够, 打印帮助信息
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
if (process.types) {
  console.log(program.types)
}

// 解析命令行参数
program.parse(process.argv)