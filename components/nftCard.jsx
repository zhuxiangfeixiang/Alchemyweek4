import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

export const NFTCard = ({ nft }) => {

const copyToClipboard = async () => {
    await navigator.clipboard.writeText(nft.contract.address);
  }

    return (
        <div className="w-1/4 flex flex-col ">
        <div className="rounded-md">
            <img className="object-cover h-128 w-full rounded-t-md" src={nft.media[0].gateway} ></img>
        </div>
        <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
            <div className="">
                <h2 className="text-xl text-gray-800">{nft.title}</h2>
                <p className="text-gray-600">Id: {nft.id.tokenId.substr(nft.id.tokenId.length - 4)}</p>
                <p className="text-gray-600" >
                    <button onClick={copyToClipboard} >
                    <FontAwesomeIcon icon="fa-brands fa-ethereum" />
                    <br/>
                    Copy Contract Address
                    </button>
                </p>
            </div>

            <div className="flex-grow mt-2">
                {/*<p className="text-gray-600">{nft.description?.substr(0, 150)}</p>*/}
            </div>
            <div className="flex justify-center mb-1">
                <a target={"_blank"} href={`https://etherscan.io/token/${nft.contract.address}`} className="py-2 px-4 bg-blue-400 w-1/2 text-center rounded-m text-white cursor-pointer">View on etherscan</a>
            </div>
        </div>

    </div>
    )
}
