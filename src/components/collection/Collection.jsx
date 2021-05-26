import React from 'react'
import './collection.scss'
import CollectionCard from '../collection-card/CollectionCard'

const Collection = ({ title, items }) => {
	return (
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">
				{items.slice(0, 4).map(({ id, ...otherProps }) => (
					<CollectionCard key={id} {...otherProps} />
				))}
			</div>
		</div>
	)
}

export default Collection
