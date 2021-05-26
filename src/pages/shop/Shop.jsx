import React, { useState } from 'react'
import './shop.scss'
import collectionData from '../../utils/shopdata.json'
import Collection from '../../components/collection/Collection'

const Shop = () => {
	const [collections, setCollections] = useState(collectionData)

	return (
		<div>
			{collections.map(({ id, ...otherCollectionProps }) => (
				<Collection key={id} {...otherCollectionProps} />
			))}
		</div>
	)
}

export default Shop
