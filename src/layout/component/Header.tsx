import './header.scss'

function Header() {
  return (
    <>
      <div className="header flex-x-between flex-y-center w-screen">
        <div>SingularDAO</div>
        <div className="flex">
          <div>Market</div>
          <div>Dashboard</div>
          <div>AirDrop</div>
        </div>
        <div className="connect-btn">Connect Wallet</div>
      </div>
    </>
  )
}

export default Header
