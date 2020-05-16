import React, { useState } from "react"

import styles from "../css/TextColumn.module.scss"

export default function TextColumn(props){
	const [showMore, setShowMore] = useState(false);
	console.log(styles.myColor)
	return (
		<section className={styles.section}>
			<div className={styles.left}>
				<h3>Welcome to</h3>
				<h1>Dixit Healing Chamber</h1>
				<p>
				Homeopathic clinic of Dr. Shravan Dixit is located in Jublie Hills, Hyderabad. The clinic was established in 2006 and is one of the most reputed clinic in the vicinity. Guided by a clear vision 
				{ 
					!showMore && 
					<span> ... <span className={styles["see-more"]} onClick={ () => setShowMore(true) }>SEE MORE</span></span> 
				}
				{ 
					showMore &&
					<span>
					, he personally diagnose and treats all this patients. He is a very good listener and understands the patients very well.
					<span className={styles["see-more"]} onClick={ () => setShowMore(false) }>SEE LESS</span> 
					</span>
					
				}
				</p>
				<button>Meet the doctor</button>
			</div>
		</section>
		)
	}