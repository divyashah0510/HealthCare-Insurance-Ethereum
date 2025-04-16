┏[ ds363 from  Divya][ 0.003s][ RAM: 12/15GB][ Wednesday at 11:08:16 PM][master ≡  ~12 -1][default@eu-north-1]
┖[D:\Projects\D-Apps\Worked Projects\HealthCare-Insurance-Ethereum]
└─Δ truffle compile --all  

Compiling your contracts...
===========================
✓ Fetching solc version list from solc-bin. Attempt #1
> Compiling .\contracts\HealthCare.sol
> Compiling .\contracts\Migrations.sol
> Artifacts written to D:\Projects\D-Apps\Worked Projects\HealthCare-Insurance-Ethereum\build\contracts
> Compiled successfully using:
   - solc: 0.8.29+commit.ab55807c.Emscripten.clang
┏[ ds363 from  Divya][ 3.421s][ RAM: 12/15GB][ Wednesday at 11:09:03 PM][master ≡  ~12 -1][default@eu-north-1]
┖[D:\Projects\D-Apps\Worked Projects\HealthCare-Insurance-Ethereum]
└─Δ truffle migrate --reset

Compiling your contracts...
===========================
✓ Fetching solc version list from solc-bin. Attempt #1
> Compiling .\contracts\HealthCare.sol
> Compiling .\contracts\Migrations.sol
> Artifacts written to D:\Projects\D-Apps\Worked Projects\HealthCare-Insurance-Ethereum\build\contracts
> Compiled successfully using:
   - solc: 0.8.29+commit.ab55807c.Emscripten.clang


Starting migrations...
======================
> Network name:    'development'
> Network id:      5777
> Block gas limit: 6721975 (0x6691b7)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xba76d1f187edaee42427c3344479e1fbdc946376c4a87fee26a43dc31f01b717
   > Blocks: 0            Seconds: 0
   > contract address:    0xc6226b85AF973796CF1f731b1D9fA9329f07ADAa
   > block number:        5
   > block timestamp:     1744825174
   > account:             0x206cb5171cB1C80a796dA6c2ca09d5438326F32A
   > balance:             99.97487216
   > gas used:            206260 (0x325b4)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0041252 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0041252 ETH


2_deploy_HealthCare.js
======================

   Deploying 'HealthCare'
   ----------------------
   > transaction hash:    0xc2f1b1bd437c41cbfdd41c4b3fdac00739d70aca8b9577177a3cdbcf5055041f
   > Blocks: 0            Seconds: 0
   > contract address:    0x88D72b6650ff085eD679948689DAB500771E710f
   > block number:        7
   > block timestamp:     1744825174
   > account:             0x206cb5171cB1C80a796dA6c2ca09d5438326F32A
   > balance:             99.95856696
   > gas used:            769548 (0xbbe0c)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01539096 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.01539096 ETH

Summary
=======
> Total deployments:   2
> Final cost:          0.01951616 ETH

