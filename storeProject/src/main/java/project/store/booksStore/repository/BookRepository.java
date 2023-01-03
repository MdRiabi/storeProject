package project.store.booksStore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import project.store.booksStore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}
