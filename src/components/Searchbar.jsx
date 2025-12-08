import styles from "./styles/Searchbar.module.css"
import { Component } from "react"

export default class Searchbar extends Component {
    state = {
        input: this.props.search
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleInput(this.state.input)
    }

    render() {
        return (
            <header className={styles.Searchbar}>
                <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
                    <button type="submit" className={styles.SearchFormButton}>
                        <span className={styles.SearchFormButtonLabel}>Search</span>
                    </button>
                    <input 
                    onChange={(e) => this.setState({ input: e.target.value })}
                    value={this.state.input}
                    className={styles.SearchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}