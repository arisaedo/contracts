const getAccounts = async () => {
  return await ethers.provider.listAccounts()
}

async function main() {
  const accounts = await getAccounts();
  console.log(accounts);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
