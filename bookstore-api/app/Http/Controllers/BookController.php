<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;

class BookController extends Controller
{
    /**
     * Display a listing of books.
     * Optional: Filter by grade.
     */
    public function index(Request $request)
    {
        $grade = $request->query('grade');

        $books = $grade
            ? Book::where('grade', $grade)->get()
            : Book::all();

        return response()->json($books);
    }

    /**
     * Store a newly created book.
     */
    public function store(Request $request)
{
    $validated = $request->validate([
        'title'    => 'required|string|max:255',
        'image'    => 'required|string', // removed max:255
        'type'     => 'nullable|string|max:100',
        'language' => 'nullable|string|max:100',
        'grade'    => 'required|string|max:10',
        'subject'  => 'nullable|string|max:100',
    ]);

    $book = Book::create($validated);

    return response()->json($book, 201);
}

    /**
     * Display the specified book.
     */
    public function show($id)
    {
        $book = Book::find($id);

        if (!$book) {
            return response()->json(['message' => 'Book not found'], 404);
        }

        return response()->json($book);
    }

    /**
     * Update the specified book.
     */
    public function update(Request $request, $id)
    {
        $book = Book::find($id);

        if (!$book) {
            return response()->json(['message' => 'Book not found'], 404);
        }

        $validated = $request->validate([
            'title'    => 'sometimes|required|string|max:255',
            'image'    => 'sometimes|required|string|max:255',
            'type'     => 'nullable|string|max:100',
            'language' => 'nullable|string|max:100',
            'grade'    => 'sometimes|required|string|max:10',
            'subject'  => 'nullable|string|max:100',
        ]);

        $book->update($validated);

        return response()->json($book);
    }

    /**
     * Remove the specified book.
     */
    public function destroy($id)
    {
        $book = Book::find($id);

        if (!$book) {
            return response()->json(['message' => 'Book not found'], 404);
        }

        $book->delete();

        return response()->json(['message' => 'Book deleted successfully']);
    }
}
