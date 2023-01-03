package project.store.booksStore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import project.store.booksStore.entity.BookCategory;

public interface BookCategoryRepository extends JpaRepository<BookCategory, Long> {

}
